import React from 'react';

import { sections } from '../../FinvestecImpressumData';
import { renderContent } from '../../utils/renderContent';
import { renderSubContent } from '../../utils/renderSubContent';

const Sections = () => {
  return sections.map((section, index) => (
    <div key={index} className='mb-8'>
      <h3 className='text-xl font-semibold mb-4 text-gray-700 border-b pb-2'>{section.title}</h3>
      <div className='text-gray-600 whitespace-pre-wrap leading-relaxed break-words'>
        {Array.isArray(section.content)
          ? section.content.map((item, idx) =>
              Array.isArray(item) ? (
                <ul key={idx} className='list-disc list-inside'>
                  {item.map((subItem, subIdx) => renderSubContent(subItem, subIdx))}
                </ul>
              ) : (
                renderContent([item])
              )
            )
          : renderContent([section.content])}
      </div>
    </div>
  ));
};

export default React.memo(Sections);
