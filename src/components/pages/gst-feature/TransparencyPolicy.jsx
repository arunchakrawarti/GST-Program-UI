import React from 'react'

const TransparencyPolicy = () => {
  return (
    <div>
        <section className="bg-navy text-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-amber mt-10">
          Transparency Policy
        </h1>

        <p className="text-gray-300 text-[1.3rem] leading-relaxed">
          We are committed to complete transparency in how our platform operates
          and how user data is handled. This Transparency Policy explains our
          approach to data usage, GST calculations, compliance processes, and
          service charges. All information displayed on the platform is clear,
          traceable, and aligned with applicable GST laws and regulations. Our
          goal is to ensure that every user understands how their data is used,
          how filings are processed, and how compliance decisions are made—without
          any hidden terms or ambiguity.
        </p>
      </div>

      <div className="container mx-auto">
        <ul className="mt-6 space-y-3 text-gray-300 text-[1.2rem]">
          <li>• Clear and upfront disclosure of pricing and service charges</li>
          <li>• Transparent GST calculations with detailed tax breakups</li>
          <li>• Full visibility into GST filings, payments, and return status</li>
          <li>• Secure handling of user data with restricted system access</li>
          <li>• No hidden fees or undisclosed compliance costs</li>
          <li>• Complete audit trail for reports, filings, and transactions</li>
          <li>• Compliance with GST laws and applicable data protection norms</li>
          <li>• Timely updates on policy changes and system enhancements</li>
        </ul>
      </div>
    </section>
    </div>
  )
}

export default TransparencyPolicy
