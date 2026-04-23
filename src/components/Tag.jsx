export const Tag = ({ children }) => {
    return (
        <span style={{
            display: 'inline-block',
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '15px',
            fontWeight: '550',
            backgroundColor: 'var(--text)',
            color: 'var(--bg)',
            border: '1px solid var(--border)',
            margin: '4px'
        }}>
            {children}
        </span>
    );
};