// import React from 'react';

const Footer = () => {
    return (
        <div className="grid grid-cols-4 bg-gray-700 py-10 max-width-600">
            {/* Get in Touch */}
            <div>
                <h3 className="text-xl text-white">Get In Touch</h3>
                <p className="text-gray-100 text-sm py-4">Dit amet consectetur. Condimentum
                   adipiscing aliquam turpis placerat dolor. Purus
                   urna in sit nullam proin. </p>
                <div className="flex flex-row">
                  <i className="fa-regular fa-envelope"></i>
                  <p className="text-gray-100 text-sm py-4">sports@support.com</p>
                </div>
                <div className="flex flex-row">
                  <i className="fa-solid fa-phone"></i>
                  <p className="text-gray-100 text-sm py-4">(+62) 123-321-543</p>
                </div>
            </div>

            {/* Company */}
            <div>
                <h3 className="text-xl text-white">Company</h3>
                <ul className="text-gray-100 text-md py-4 flex flex-col gap-2">
                    <li>About us</li>
                    <li>Leadership</li>
                    <li>Careers</li>
                    <li>News & Article</li>
                    <li>Legal Notice</li>
                </ul>
            </div>

            {/* Support */}
            <div>
            <h3 className="text-xl text-white">Support</h3>
                <ul className="text-gray-100 text-md py-4 flex flex-col gap-2">
                    <li>Help Center</li>
                    <li>FAQ</li>
                    <li>Ticket Support</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            {/* Services */}
            <div>
            <h3 className="text-xl text-white">Services</h3>
                <ul className="text-gray-100 text-md py-4 flex flex-col gap-2">
                    <li>Academy</li>
                    <li>Group Lesson</li>
                    <li>Private Lesson</li>
                    <li>Sports for kids</li>
                    <li>Sports for Audit</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;