

const Container = ({ children, className }) => {
  return (
    <div className={`lg:max-w-295 lg:m-auto ${className}`}>{children}</div>
  );
};

export default Container;
