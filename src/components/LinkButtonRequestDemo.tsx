export default function LinkButtonRequestDemo({ classes = "px-15 py-2" }) {
  return (
    <a
      href="demo"
      className={`bg-action-primary text-accent rounded-lg font-bold ${classes}`}
    >
      Request a Demo
    </a>
  );
}
