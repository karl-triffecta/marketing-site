export default function FormSubscribeNewsletter() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    alert(`To submit: ${JSON.stringify(values, null, 2)}`);
    event.currentTarget.reset();
  };

  return (
    <div class="bg-white rounded-2xl lg:w-md">
      <form
        class="flex flex-col lg:flex-col sm:flex-row space-y-8"
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
        <button
          type="submit"
          class="bg-primary-dark text-primary-dark text-text px-4 py-2 rounded-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
