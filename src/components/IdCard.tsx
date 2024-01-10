import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  title: string;
  description: string;
  interests: string[];
  socials?: string;
}

const IdCard = (props: Props) => {
  const { title, description, interests } = props;
  return (
    <>
      <Card className="min-w-[450px] shadow-md">
        <CardHeader className="flex flex-row  gap-5 items-center justify-right">
          <Avatar>
            <AvatarImage src="https://pbs.twimg.com/profile_images/1219592690431483904/JXrUq69-_400x400.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="container mx-auto p-2">
            <h1 className="text-xl mb-1 font-semibold">Interests</h1>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((item) => (
                <div key={item} className="flex ">
                  <ChevronRight />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-3">
          <FcGoogle className="h-7 w-7" />
          <FaGithub className="h-7 w-7" />
          <FaXTwitter className="h-7 w-7" />
        </CardFooter>
      </Card>
    </>
  );
};

export default IdCard;
