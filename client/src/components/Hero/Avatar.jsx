import React from 'react'
import '../../styles/Avatar.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

function Avatar() {
  return (
    <div class="flex space-x-4">
    <div class="avatar avatar-facebook">
      <FaFacebookF class="w-6 h-6" />
    </div>
    <div class="avatar avatar-instagram">
      <FaInstagram class="w-6 h-6" />
    </div>
    <div class="avatar avatar-snapchat">
      <FaSnapchatGhost class="w-6 h-6" />
    </div>
    <div class="avatar avatar-twitter">
      <FaTwitter class="w-6 h-6" />
    </div>
  </div>
  )
}

export default Avatar
