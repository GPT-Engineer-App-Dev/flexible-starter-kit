import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Application</h1>
      
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>This is a basic application structure.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Enter your name" />
            <Button className="w-full">Submit</Button>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          Built with shadcn components
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;