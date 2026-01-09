export interface ContactItem {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatarColor: string;
  initial: string;
  action: string;
  canEditLabel: string;
  url?: string;
}

export const CONTACTS: ContactItem[] = [
  {
    id: "email",
    name: "Hoang Quy",
    handle: "hoangquy2620@gmail.com",
    role: "Owner",
    avatarColor: "bg-design-blue",
    initial: "HQ",
    action: "copy",
    canEditLabel: "Can edit",
  },
  {
    id: "linkedin",
    name: "LinkedIn Profile",
    handle: "/in/hoang-quy",
    role: "Can hire",
    avatarColor: "bg-[#0077b5]", // LinkedIn Blue
    initial: "in",
    action: "link",
    url: "https://linkedin.com/in/hoang-quy",
    canEditLabel: "Viewer",
  },
  {
    id: "github",
    name: "GitHub Repo",
    handle: "NCHQ02",
    role: "Can audit",
    avatarColor: "bg-[#333]", // GitHub Black
    initial: "Gh",
    action: "link",
    url: "https://github.com/NCHQ02",
    canEditLabel: "Editor",
  },
  {
    id: "phone",
    name: "Mobile",
    handle: "(+84) 971 012 091",
    role: "Can call",
    avatarColor: "bg-design-green",
    initial: "Ph",
    action: "copy",
    canEditLabel: "Viewer",
  },
];
