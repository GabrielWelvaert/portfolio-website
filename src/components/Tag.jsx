export const Tag = ({ children }) => {
    return (
        <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '14px',
            fontWeight: '500',
            backgroundColor: 'var(--text)',
            color: 'var(--bg)',
            border: '1px solid var(--border)',
            margin: '4px'
        }}>
            {children}
        </span>
    );
};