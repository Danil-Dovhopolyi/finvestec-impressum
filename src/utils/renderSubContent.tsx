export const renderSubContent = (
  subItem: string | { text: string; link: boolean },
  subIdx: number
) => {
  if (typeof subItem === 'string') {
    return <li key={subIdx}>{subItem}</li>;
  } else {
    const isEmail = subItem.text.includes('E-Mail: ');
    const emailText = isEmail ? subItem.text.slice(8) : subItem.text;
    const href = isEmail ? `mailto:${emailText}` : subItem.text;
    return (
      <li key={subIdx}>
        {isEmail && 'E-Mail: '}
        <a href={href} className='text-customLink'>
          {emailText}
        </a>
      </li>
    );
  }
};
