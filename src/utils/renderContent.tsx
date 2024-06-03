type ContentItem = string | { text: string; link: boolean } | { title: string };

export const renderContent = (content: ContentItem[]) => {
  return content.map((item, idx) => {
    if (typeof item === 'string') {
      return <p key={idx}>{item}</p>;
    } else if ('link' in item && item.link) {
      const isEmail = item.text.includes('E-Mail: ');
      const emailText = isEmail ? item.text.slice(8) : item.text;
      const href = isEmail ? `mailto:${emailText}` : emailText;
      return (
        <p key={idx}>
          {isEmail && 'E-Mail: '}
          <a href={href} className='text-customLink'>
            {emailText}
          </a>
        </p>
      );
    } else if ('title' in item) {
      return (
        <h4 key={idx} className='text-lg font-semibold mt-4'>
          {item.title}
        </h4>
      );
    } else {
      return <p key={idx}>{item.text}</p>;
    }
  });
};
