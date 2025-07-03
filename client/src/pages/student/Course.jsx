import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Course = () => {
  return (
    <Card className="h-full w-full group rounded-xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-0">

      {/*  */}
      <div className="relative rounded-t-xl overflow-hidden">
        <div className="clip-diagonal">
          <img
            src="https://img-c.udemycdn.com/course/750x422/5528078_095a_8.jpg"
            alt="course"
            className="w-full h-48 object-cover"
          />
        </div>
        <Badge className="absolute top-3 left-3 bg-gray-500 text-white text-xs px-3 py-1 rounded-full">
          Bestseller
        </Badge>
      </div>

      <CardContent className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gary-600 transition-colors truncate">
          Next.js Complete Course in Hindi 2025
        </h3>

        <div className="flex items-center gap-2 text-yellow-400">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400" />
          ))}
          <Star className="h-4 w-4" />
          <span className="text-sm text-gray-600 ml-2">(4.0)</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/71966035?v=4"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Dinanath Mukhiya</span>
          </div>
          <span>3h 30m</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-600">Rs 499</span>
          <Badge className="gray-100 tegray-700 px-2 py-1 text-xs rounded-full">
            Advance
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
