

const Container = ({ children, className }) => {
  return (
    <div className={` max-w-295 m-auto ${className}`}>{children}</div>
  );
};

export default Container;
