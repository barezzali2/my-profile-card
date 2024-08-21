import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialMedia() {
    return (
        <div className="smIcons" >
            
            <a href="https://www.instagram.com/barez_z_ali?igsh=MWFvejZ4c2Mxdjh5bg==" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaInstagram size={48} color="#E4405F" />
                </button>
            </a>
            <a href="https://github.com/barezzali2" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaGithub size={48} color="#333" />
                </button>
            </a>
            <a href="https://www.linkedin.com/in/barez-zuber-ali-502193213/" target="_blank" rel="noopener noreferrer">
                <button>
                    <FaLinkedin size={48} color="#0077B5" />
                </button>
            </a>
        </div>
    );
}

export default SocialMedia;
