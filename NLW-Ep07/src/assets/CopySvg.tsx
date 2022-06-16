import * as React from 'react';

export function CopySvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
      <path d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.1665 12.5H3.33317C2.89114 12.5 2.46722 12.3244 2.15466 12.0118C1.8421 11.6992 1.6665 11.2753 1.6665 10.8333V3.33329C1.6665 2.89127 1.8421 2.46734 2.15466 2.15478C2.46722 1.84222 2.89114 1.66663 3.33317 1.66663H10.8332C11.2752 1.66663 11.6991 1.84222 12.0117 2.15478C12.3242 2.46734 12.4998 2.89127 12.4998 3.33329V4.16663" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  )
}
