type StyleProp = {
  styles: React.CSSProperties;
};

export const Container = ({ styles }: StyleProp) => {
  return (
    <div>
      <div style={styles}>This is style props</div>
    </div>
  );
};
