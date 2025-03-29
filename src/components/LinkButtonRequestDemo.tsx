import TriffectaButton from "./TriffectaButton";

export default function LinkButtonRequestDemo({ classes = "px-15 py-2" }) {
  return (
    <TriffectaButton href="/demo" className={classes}>
      Request a Demo
    </TriffectaButton>
  );
}
