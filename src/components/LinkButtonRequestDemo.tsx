import TriffectaButton from "./TriffectaButton";

export default function LinkButtonRequestDemo({
  classes = "px-15 py-2",
  free = false,
}) {
  return (
    <TriffectaButton href="demo" className={classes}>
      {free ? `Book a free Demo` : `Book a Demo`}
    </TriffectaButton>
  );
}
