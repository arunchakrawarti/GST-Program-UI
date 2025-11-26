"use client";
const Text = ({ content, className = "", href }) => {
  if (href) {
    return (
      <a href={href} className={`cursor-pointer ${className}`}>
        {content}
      </a>
    );
  }
  return <p className={`text-navy cursor-pointer font-light text-[0.9rem]  ${className}`}>{content}</p>;
};

export default Text;
