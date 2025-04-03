export default function ThankYou() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold">Thank you for sharing your details!</h1>
        <p>Our team will reach out to you via email.</p>
        <p className="mt-4">Would you like to explore these wisdom articles?</p>
        <a href="/blog" className="mt-2 text-blue-500 underline">Go to Blog</a>
      </div>
    );
  }
  