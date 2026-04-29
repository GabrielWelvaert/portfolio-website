
// Tags are text surrounded by a rounded background, like a sticker
export const Tag = ({ children }) => {
    return (
        <span className="inline-block px-[10px] py-[4px] rounded-full text-[15px] font-bold bg-[var(--text)] text-[var(--bg)] border border-[var(--border)] m-1 ">
        {children}
        </span>
    );
};