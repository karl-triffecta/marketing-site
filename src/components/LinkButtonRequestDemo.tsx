import TriffectaButton from "./TriffectaButton";

export default function LinkButtonRequestDemo({
  withRetailMedia = false,
  classes = "px-15 py-2",
}) {
  return (
    <TriffectaButton href="/lets-talk" className={classes}>
      {withRetailMedia ? `Lets Talk Retail Media` : `Lets talk`}
    </TriffectaButton>
  );
}
