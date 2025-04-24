
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "PostingPal has transformed how we manage our social media presence. The analytics are incredible!",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Solutions Inc.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The scheduling features save us hours every week. It's been a game-changer for our team.",
    author: "Michael Chen",
    role: "Social Media Manager",
    company: "Growth Studios",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Best investment we've made for our social media strategy. The ROI is incredible.",
    author: "Emma Williams",
    role: "Brand Manager",
    company: "Creative Co.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Loved by marketing teams everywhere
        </h2>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <blockquote className="text-gray-600 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-800">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
