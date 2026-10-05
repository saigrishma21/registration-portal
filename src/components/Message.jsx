function Message({ type, children }) {
  if (!children) {
    return null;
  }

  return (
    <div className={`message ${type}`}>
      {children}
    </div>
  );
}

export default Message;