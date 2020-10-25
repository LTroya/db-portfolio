import { trackEvent } from '../../lib/ga';

/**
 * Displays a list of share icons. Reports to analytics when clicked.
 */
const ShareIcons: React.FC = () => {
  const onClick = (value) => {
    trackEvent({
      action: 'click',
      category: 'Social Media',
      label: value
    });
  };
  return (
    <div className="flex items-center">
      <a
        href="https://github.com/sidthesloth92"
        className="w-6 md:w-8 m-1 lg:m-2"
        onClick={() => onClick('Github Share')}>
        <img alt="github icon" src="/icons/github.svg" />
      </a>
      <a
        href="https://codepen.io/sidthesloth92"
        className="w-6 md:w-8 m-1 lg:m-2"
        onClick={() => onClick('Codepen Share')}>
        <img alt="codepen icon" src="/icons/codepen.svg" />
      </a>
      <a
        href="https://twitter.com/sidthesloth92"
        className="w-6 md:w-8 m-1 lg:m-2"
        onClick={() => onClick('Twitter Share')}>
        <img alt="twitter icon" src="/icons/twitter.svg" />
      </a>
      <a
        href="https://linkedin.com/in/dineshbalajiv"
        className="w-6 md:w-8 m-1 lg:m-2"
        onClick={() => onClick('Linkedin Share')}>
        <img alt="linkedin icon" src="/icons/linkedin.svg" />
      </a>
      <a
        href="https://instagram.com/sidthesloth92"
        className="w-6 md:w-8 m-1 lg:m-2"
        onClick={() => onClick('Instagram Share')}>
        <img alt="github icon" src="/icons/instagram.svg" />
      </a>
      <a
        href="https://www.behance.net/sidthesloth92"
        className="w-6 md:w-8 m-1 lg:m-2"
        onClick={() => onClick('Behance Share')}>
        <img alt="behance icon" src="/icons/behance.svg" />
      </a>
    </div>
  );
};

export default ShareIcons;