import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function TestimonialCard() {
  return (
    <Card
      placeholder=""
      color="transparent"
      shadow={false}
      className="w-full max-w-[26rem]"
    >
      <div className="flex">
        <CardHeader
          placeholder=""
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            placeholder=""
            size="lg"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography placeholder="" variant="h5" color="blue-gray">
                Tania Andrew
              </Typography>
              <div className="5 flex items-center gap-0"></div>
            </div>
            <Typography placeholder="" color="blue-gray">
              Frontend Lead @ Google
            </Typography>
          </div>
        </CardHeader>
        <CardBody placeholder="" className="mb-6 p-0">
          <Typography placeholder="">
            &quot;I found solution to all my design needs from Creative Tim. I
            use them as a freelancer in my hobby projects for fun! And its
            really affordable, very humble guys !!!&quot;
          </Typography>
        </CardBody>
      </div>
    </Card>
  );
}
