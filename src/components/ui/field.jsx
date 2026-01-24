export const Field = ({ children, className, ...props }) => {
  return (
    <div className={`mb-4 ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export const FieldLabel = ({ children, className, ...props }) => {
  return (
    <label className={`block text-sm font-medium mb-1 ${className || ''}`} {...props}>
      {children}
    </label>
  );
};