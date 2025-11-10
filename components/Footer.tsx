import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SocialMedia from "./SocialMedial";
import Link from "next/link";
import { categoriesData, quickLinksData } from "@/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orlean, USA",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+12 958 648 597",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "Shopcart@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect"
          >
            {item?.icon}
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect">
                {item?.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect">
                {item?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="inline-flex">
            <h2 className="text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans">
              Shopcar
              <span className="text-2xl text-shop_light_green font-black tracking-wider uppercase group-hover:text-shop_dark_green hoverEffect">
                t
              </span>
            </h2>
          </Link>
          <p className="subtext">
            Discover curated furniture collections at Shopcart, blending style
            and comfort for your perfect living spaces.
          </p>
          <SocialMedia />
        </div>

        <div>
          <p className="mb-3 font-bold">Quick Links</p>
          <ul className="subtext">
            {quickLinksData.map((item) => (
              <li key={item.title} className="mb-1.5">
                <Link
                  href={item?.href}
                  className="hover:text-shop_light_green hoverEffect"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-bold">Quick Links</p>
          <ul className="subtext">
            {categoriesData.map((item) => (
              <li key={item.title} className="mb-1.5">
                <Link
                  href={`/category/${"item?.href"}`}
                  className="hover:text-shop_light_green hoverEffect"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="subtitle">Newsletter</p>
          <p className="subtext">
            Subscribe to our newsletter to recieve the latest updates and
            offers.
          </p>
          <form>
            <Input
              placeholder="Enter your Email"
              className="mb-4"
              type="email"
              required
            ></Input>
            <Button className="w-full">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="py-6 border-t text-center text-sm text-gray-600">
        <div>
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="inline-flex">
            <h2 className="text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans">
              Shopcar
              <span className="text-shop_light_green font-black tracking-wider uppercase group-hover:text-shop_dark_green hoverEffect">
                t
              </span>
            </h2>
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
