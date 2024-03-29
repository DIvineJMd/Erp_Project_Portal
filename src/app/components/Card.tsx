import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function TestimonialCard() {
  return (
    <Card
      placeholder=""
      color="transparent"
      shadow={true}
      className="w-full max-w-[70rem]"
    >
      <CardHeader
        placeholder=""
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8 p-5"
      >
        <Avatar
          placeholder=""
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex flex-col flex-grow gap-0.5">
          <div className="flex items-center justify-between">
            <Typography placeholder="" variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="flex items-center gap-0"></div>
          </div>
          <Typography placeholder="" color="blue-gray">
            Frontend Lead @ Google
          </Typography>
        </div>
      </CardHeader>

      {/* Body Content */}
      <CardBody
        placeholder=""
        className="p-5 flex flex-col lg:flex-row lg:flex-nowrap"
      >
        <Typography placeholder="" className="mb-6 lg:mb-0 lg:mr-5">
          &quot;I found solution to all my design needs from Creative Tim. I use
          them as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!&quot;
        </Typography>
        <div className="flex justify-end  ">
          <div className="p-5">
            <Button
              placeholder=""
              variant="gradient"
              color="teal"
              className="w-24 h-10"
              onClick={() => {}}
            >
              Accept
            </Button>
          </div>
          <div className="p-5">
            <Button
              placeholder=""
              variant="gradient"
              color="teal"
              className="w-24 h-10"
              onClick={() => {}}
            >
              Reject
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
