import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar } from "@radix-ui/react-avatar";
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Dinanath Mukhiya",
    email: "dinanathmukhiya@gmail.com",
    education: "bachelor",
    field: "Computer Science",
    interests: "Web Development, AI, Design",
    role: "instructor",
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfile(editProfile);
    // Optionally, send updated profile to backend here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 my-24">
      <h1 className="font-bold text-2xl text-center md:text-left">PROFILE</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar>
            <AvatarImage
              className="h-24 w-24 rounded-4xl md:h-32 md:w-32 mb-4"
              src="https://avatars.githubusercontent.com/u/71966035?v=4"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-900">Name:</span>{" "}
            <span className="text-gray-700">{profile.name}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            <span className="text-gray-700">{profile.email}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900">Education:</span>{" "}
            <span className="text-gray-700 capitalize">{profile.education}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900">Field:</span>{" "}
            <span className="text-gray-700">{profile.field}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900">Interests:</span>{" "}
            <span className="text-gray-700">{profile.interests}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900">Role:</span>{" "}
            <span className="text-gray-700 capitalize">{profile.role}</span>
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-4">
                Edit Profile
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes and click save.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                {/* Name */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    className="col-span-3"
                    value={editProfile.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="col-span-3"
                    value={editProfile.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Education */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="education">Education</Label>
                  <select
                    id="education"
                    name="education"
                    value={editProfile.education}
                    onChange={handleChange}
                    className="col-span-3 border border-gray-300 px-3 py-2 rounded-md"
                  >
                    <option value="">Select level</option>
                    <option value="highschool">High School</option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                {/* Field */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="field">Field</Label>
                  <Input
                    id="field"
                    name="field"
                    type="text"
                    value={editProfile.field}
                    onChange={handleChange}
                    className="col-span-3"
                  />
                </div>

                {/* Interests */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="interests">Interests</Label>
                  <textarea
                    id="interests"
                    name="interests"
                    value={editProfile.interests}
                    onChange={handleChange}
                    rows="3"
                    className="col-span-3 border border-gray-300 px-3 py-2 rounded-md"
                  />
                </div>

                {/* Role */}
                {/* <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role">Role</Label>
                  <select
                    id="role"
                    name="role"
                    value={editProfile.role}
                    onChange={handleChange}
                    className="col-span-3 border border-gray-300 px-3 py-2 rounded-md"
                  >
                    <option value="">Select role</option>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                  </select>
                </div> */}
              </div>

              <Button onClick={handleSave}>Save Changes</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
