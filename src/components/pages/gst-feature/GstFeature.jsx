import Image from 'next/image'
import React from 'react'

const GstFeature = () => {
  return (
    <section className="bg-navy text-white py-10 ">
        <div className='container mx-auto text-center'>
            <h1 className='mt-10  text-2xl sm:text-4xl  lg:text-5xl font-bold mb-10 text-amber'>GST Feature</h1>
      <p className="text-gray-300 text-[1.3rem] leading-relaxed">
  Our GST platform is designed to simplify every stage of GST compliance for
  businesses, professionals, and Chartered Accountants by bringing all critical
  GST processes under one powerful and easy-to-use system. From seamless GST
  registration and accurate return filing to ITC reconciliation, tax payments,
  notices, and compliance tracking — every activity is handled through a single
  intelligent dashboard. With automated tax calculations, real-time GST portal
  synchronization, built-in validations, and smart compliance alerts, the
  platform helps reduce manual effort, eliminate filing errors, and ensure
  timely submissions. Whether you are filing GSTR-1 or GSTR-3B, generating
  e-invoices and e-way bills, monitoring GST liabilities, or managing multiple
  clients, our software delivers speed, accuracy, transparency, and complete
  control over your GST operations.
</p>



    </div>
    <div className='container mx-auto mt-10'>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative z-10">

       <div>
            <ul className=" space-y-3 text-gray-300 text-[1.2rem]">
  <li>• Easy GST Registration & Profile Management</li>
  <li>• Fast Filing of GSTR-1, GSTR-3B & Other Returns</li>
  <li>• Auto ITC Calculation & Reconciliation</li>
  <li>• Smart GST Calculator for Tax, Interest & Late Fees</li>
  <li>• E-Invoice & E-Way Bill Generation</li>
  <li>• GST Payment Tracking & Liability Management</li>
  <li>• Compliance Dashboard with Notices & Alerts</li>
  <li>• Secure GST Portal Sync & Data Reports</li>
  <li>• Real-time GST data sync with government portal</li>
  <li>• Automated due-date reminders and compliance alerts</li>
  <li>• Multi-business and multi-GSTIN management support</li>
  <li>• Detailed GST reports for audit and reconciliation</li>
  <li>• Error detection and validation before return filing</li>
  <li>• Role-based access for teams and tax professionals</li>
</ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/Assets/gstfeature.png"
            alt="GST Illustration"
            width={600}
            height={900}
            className="object-contain max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] lg:max-h-[80vh]"
          />
        </div>
      </div>
    </div>
    </section>
  )
}

export default GstFeature
