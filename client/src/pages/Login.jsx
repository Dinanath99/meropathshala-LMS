import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e, type) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({
        ...signupInput,
        [name]: value,
      });
    } else {
      setLoginInput({
        ...loginInput,
        [name]: value,
      });
    }
  };

  // const handleform
  const handleRegistration = (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    console.log(inputData);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <Tabs defaultValue="signup" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        {/*  Signup section */}
        <TabsContent value="signup">
          <div className="flex justify-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-center">Signup</CardTitle>
                <CardDescription className="text-center">
                  Create a new account and click signup when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input
                    type="text"
                    required="true"
                    name="name"
                    value={signupInput.name}
                    placeholder="Enter your name"
                    onChange={(e) => changeInputHandler(e, "signup")}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={signupInput.email}
                    required="true"
                    placeholder="Enter your email"
                    onChange={(e) => changeInputHandler(e, "signup")}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={signupInput.password}
                    placeholder="Enter your password"
                    required="true"
                    onChange={(e) => changeInputHandler(e, "signup")}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleRegistration("signup")}
                  className="w-full cursor-pointer"
                >
                  Signup
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        {/*  login section */}
        <TabsContent value="login">
          <div className="flex justify-center ">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-center">Login</CardTitle>
                <CardDescription className="text-center">
                  Enter your credentials to login.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-login-email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={loginInput.email}
                    placeholder="Enter your email"
                    required="true"
                    onChange={(e) => changeInputHandler(e, "login")}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tabs-demo-login-password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={loginInput.password}
                    placeholder="Enter your password"
                    required="true"
                    onChange={(e) => changeInputHandler(e, "login")}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleRegistration("login")}
                  className="w-full cursor-pointer"
                >
                  Login
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
