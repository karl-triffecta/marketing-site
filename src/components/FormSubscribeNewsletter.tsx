import TriffectaButton from "./TriffectaButton";

export default function FormSubscribeNewsletter() {
  // @ts-ignore
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    alert(`To submit: ${JSON.stringify(values, null, 2)}`);
    event.currentTarget.reset();
  };

  return (
    <div class="rounded-2xl bg-white lg:w-md">
      <form
        class="flex flex-col space-y-8 sm:flex-row lg:flex-col"
        onSubmit={handleSubmit}
      >
        <h3 class="text-xl font-bold">Subscribe to our Newsletter</h3>
        <input
          autocomplete="on"
          id="email"
          placeholder="Email"
          name="email"
          required
          type="email"
          class="rounded-xl border-1 border-[#CCCCCC] py-2 pl-4"
        />
        <TriffectaButton type="submit">Subscribe</TriffectaButton>
      </form>
    </div>
  );
}
