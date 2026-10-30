import TriffectaButton from "./TriffectaButton";

export default function LinkButtonRequestDemo({
  withRetailMedia = false,
  classes = "!rounded-design-md !px-7 !py-3.5 !text-base !leading-6",
}) {
  return (
    <TriffectaButton href="/lets-talk" variant="dark" className={classes}>
      {withRetailMedia ? `Let's talk retail media →` : `Let's talk`}
    </TriffectaButton>
  );
}
