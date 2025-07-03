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
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import authImage from "../assets/loginLearn2.gif"; // 🔁 Update this path as needed

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

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

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

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success("Registration successful! You can now login.");
    }
    if (registerError) {
      toast.error(`Registration failed: ${registerError.data.message}`);
    }
    if (loginIsSuccess && loginData) {
      toast.success("Login successful!");
      navigate("/");
    }
    if (loginError) {
      toast.error(`Login failed: ${loginError.data.message}`);
    }
  }, [
    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex w-full max-w-6xl overflow-hidden">

        {/*  Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={authImage}
            alt="Authentication"
            className="object-cover w-full  h-[450px]"/>
            </div>
            
      
        <div className="w-full md:w-1/2  p-6">
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="signup">Signup</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>

            
            <TabsContent value="signup">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-center">Signup</CardTitle>
                  <CardDescription className="text-center">
                    Create a new account and click signup when you're done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={signupInput.name}
                      placeholder="Enter your name"
                      required
                      onChange={(e) => changeInputHandler(e, "signup")}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      value={signupInput.email}
                      placeholder="Enter your email"
                      required
                      onChange={(e) => changeInputHandler(e, "signup")}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      value={signupInput.password}
                      placeholder="Enter your password"
                      required
                      onChange={(e) => changeInputHandler(e, "signup")}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    disabled={registerIsLoading}
                    onClick={() => handleRegistration("signup")}
                    className="w-full"
                  >
                    {registerIsLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                        wait...
                      </>
                    ) : (
                      "Signup"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Login Section */}
            <TabsContent value="login">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-center">Login</CardTitle>
                  <CardDescription className="text-center">
                    Enter your credentials to login.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      value={loginInput.email}
                      placeholder="Enter your email"
                      required
                      onChange={(e) => changeInputHandler(e, "login")}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      value={loginInput.password}
                      placeholder="Enter your password"
                      required
                      onChange={(e) => changeInputHandler(e, "login")}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    disabled={loginIsLoading}
                    onClick={() => handleRegistration("login")}
                    className="w-full"
                  >
                    {loginIsLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                        wait...
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
