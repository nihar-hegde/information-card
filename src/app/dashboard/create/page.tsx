import { CreateForm } from "@/components/shareables/CreateForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreatePage = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <Card className="flex flex-col items-center justify-center min-w-[650px] shadow-md ">
        <CardHeader>
          <CardTitle>Create a New Card</CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <CreateForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePage;
