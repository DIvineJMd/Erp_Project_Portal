import { useState, useEffect } from "react";
import { CardBody, Input, Typography } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsSendArrowDown, BsArrowLeft } from "react-icons/bs";

interface Profile {
  name: string;
  avatar: string;
}

const fakeProfiles: Profile[] = [
  {
    name: "John Doe",
    avatar:
      "https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png",
  },
  {
    name: "Jane Smith",
    avatar:
      "https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png",
  },
  {
    name: "jondon Smith",
    avatar:
      "https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png",
  },
  {
    name: "carlos Smith",
    avatar:
      "https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png",
  },
  // Add more fake profiles as needed
];

interface ChatMessage {
  id: string;
  sender: Profile;
  message: string;
  timestamp: string;
}

interface SideChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideChatBox: React.FC<SideChatBoxProps> = ({ isOpen, onClose }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showInbox, setShowInbox] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const handleCloseChatBox = () => {
    onClose();
    setSelectedProfile(null); // Reset selected profile when closing the chat box
    setShowInbox(true); // Reset to show inbox when closing the chat box
  };

  // Function to generate a fake chat message
  const generateFakeChatMessage = (): ChatMessage => {
    const randomIndex = Math.floor(Math.random() * fakeProfiles.length);
    const sender = fakeProfiles[randomIndex];
    return {
      id: Math.random().toString(),
      sender,
      message: "This is a fake message.",
      timestamp: new Date().toLocaleString(),
    };
  };

  // Function to populate chat with fake messages
  const populateChat = () => {
    const newChatMessages: ChatMessage[] = [];
    for (let i = 0; i < 10; i++) {
      newChatMessages.push(generateFakeChatMessage());
    }
    setChatMessages(newChatMessages);
  };

  // Populate chat when the component mounts
  useEffect(() => {
    if (isOpen) {
      populateChat();
    }
  }, [isOpen]);

  // Handle click on a profile
  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    setShowInbox(false); // Switch to show chat messages when a profile is clicked
  };

  // Handle click on back button
  const handleBackButtonClick = () => {
    setShowInbox(true);
    setSelectedProfile(null);
  };

  const handleMessageSend = () => {
    // Your logic to send message
    console.log("Message sent:", message);
    setMessage(""); // Clear message input
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 right-0 m-4 z-50">
          <div className="relative max-w-md w-full bg-white shadow-xl rounded-lg">
            <div className="flex justify-between bg-teal-500 text-white p-3 rounded-t-lg">
              <button onClick={handleBackButtonClick} className="focus:outline-none">
                <BsArrowLeft className="text-xl" />
              </button>
              <h2 className="font-bold">{showInbox ? "Inbox" : "Chat"}</h2>
              <button onClick={handleCloseChatBox} className="focus:outline-none">
                <IoMdClose />
              </button>
            </div>
            {showInbox && (
              <div className="p-4">
                <div className="w-full md:w-72">
                  <Input
                    crossOrigin={""}
                    label="Search"
                    icon={<FaMagnifyingGlass className="h-5 w-5" />}
                  />
                </div>
              </div>
            )}
            <CardBody placeholder="" className="overflow-scroll px-0 max-h-96">
              <div className="p-4">
                {showInbox
                  ? fakeProfiles.map((profile, index) => (
                      <div
                        key={index}
                        className="mb-4 flex items-center cursor-pointer"
                        onClick={() => handleProfileClick(profile)}
                      >
                        <img
                          src={profile.avatar}
                          alt={profile.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <Typography placeholder="" className="font-semibold">
                          {profile.name}
                        </Typography>
                      </div>
                    ))
                  : selectedProfile && (
                      <>
                        <div className="flex items-center mb-4">
                          <img
                            src={selectedProfile.avatar}
                            alt={selectedProfile.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <Typography placeholder="" className="font-semibold">
                            {selectedProfile.name}
                          </Typography>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-100 p-3 rounded-lg">
                            <p>This is a chat message.</p>
                            <p className="text-xs text-gray-500">Timestamp</p>
                          </div>
                        </div>
                        <div className="w-full md:w-72">
                          <Input
                            crossOrigin={""}
                            label="Type message"
                            icon={<BsSendArrowDown className="h-5 w-5" />}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleMessageSend();
                              }
                            }}
                          />
                        </div>
                      </>
                    )}
              </div>
            </CardBody>
          </div>
        </div>
      )}
    </>
  );
};

export default SideChatBox;
