// Navigation types
export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
  isRoute?: boolean; // Flag for React Router links vs anchor tags
}

export interface SocialIcon {
  icon: string;
  url: string;
  label: string;
}

export interface NavigationConfig {
  menuItems: NavLink[];
  socialIcons?: SocialIcon[];
  contactPhone: string;
  contactEmail: string;
}
