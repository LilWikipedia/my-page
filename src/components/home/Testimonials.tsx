const Testimonials = () => {
  const testimonials = [
    {
      company: "Google",
      logo: "/company-logos/google.svg",
      text: "Thank you for your great engagement in our program. It's a great pleasure to work with you",
      author: "Google Security Team aka GoogleVRP"
    },
    {
      company: "Apple",
      logo: "/company-logos/apple.svg",
      text: "We greatly appreciate your assistance in helping to maintain and improve the security of our products.",
      author: "Apple Security Team"
    },
    {
      company: "Amazon",
      logo: "/company-logos/amazon.svg",
      text: "We really appreciate all the time you have put into your research, thank you again for helping us to protect our customers.",
      author: "Amazon Security Team"
    },
    {
      company: "United Airlines",
      logo: "/company-logos/united.svg",
      text: "Thank you for participating in our Bug Bounty Program and helping us improve our security! We appreciate your participation in this program and encourage you to submit any other bugs you find.",
      author: "United Airlines Security Team"
    },
    {
      company: "Coinbase",
      logo: "/company-logos/coinbase.svg",
      text: "Coinbase would like to thank you for your various findings over the years. Your research has been essential in helping Coinbase improve its security posture. We look forward to your future work.",
      author: "Coinbase Security Team"
    },
    {
      company: "Harvard",
      logo: "/company-logos/harvard.svg",
      text: "Harvard appreciates responsible reporting of information security issues impacting our systems and networks. Thank you, Ashutosh!",
      author: "Chief Information Security Officer, Harvard University"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-blue mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.company} className="bg-glass p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.logo} 
                alt={`${testimonial.company} logo`} 
                className="h-8 w-auto mr-3"
              />
            </div>
            <blockquote className="text-cyber-gray mb-4 italic">
              "{testimonial.text}"
            </blockquote>
            <p className="text-cyber-green text-sm">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;