import React from 'react';
import "./ComponentOfTab.css"
import { Box, Tabs, Text } from '@radix-ui/themes';
import imageOfTap from '../../Images/tap-nfc-qapkbln0c38roe17gcfot892k0biwpsqnvi6vo5s8y.jpg'
import imageOfScan from '../../Images/scan-qapkbzql6ls2ijgq60j3cmozgse146cpptah2tkvnm.jpg'
import imageOfShare from '../../Images/share-qapkc4fs4ryi4l9wekk873iafpqv6nvdegjwh7dwsi.jpg'
import NfcPhone from '../../Images/Inkedd439bdccb0da4fe364a04510dacf98c0.jpg'




const ImageWidget = ({ imageUrl, title, alt }) => (
  <div className="elementor-element elementor-element-7e8d368 elementor-widget elementor-widget-image">
    <div className="elementor-widget-container">
      <img
        data-lazyloaded="1"
        src={imageUrl}
        decoding="async"
        data-src={imageUrl}
        title={title}
        alt={alt}
        loading="lazy"
        data-ll-status="loaded"
        className="entered litespeed-loaded"
      />
    </div>
  </div>
);

const TextWidget = ({ heading, text }) => (
  <div className="elementor-element elementor-element-70f09f9 elementor-widget elementor-widget-heading">
    <div className="elementor-container">
      <h2 className="elementor-heading-title elementor-size-default" style={{ fontFamily: '"DM Sans", Bangla1094, sans-serif' }}>
        {heading}
      </h2>
    </div>
    <div className="elementor-element elementor-element-98bed36 elementor-widget elementor-widget-text-editor" style={{ fontFamily: '"DM Sans", Bangla1094, sans-serif' }}>
      <div className="elementor-container">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

const Section = ({ imageUrl, title, alt, heading, text }) => (
  <section className="elementor-section elementor-inner-section elementor-section-boxed elementor-section-height-default elementor-section-height-default">
    <div className="elementor-container elementor-column-gap-default">
      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element">
        <ImageWidget imageUrl={imageUrl} title={title} alt={alt} />
      </div>
      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element">
        <TextWidget heading={heading} text={text} />
      </div>
    </div>
  </section>
);


const ComponentOfTab = () => {
    return (
      <div className=' flex justify-content: space-between;'>
        <div>
             <Tabs.Root defaultValue="Share_Instantly" >
  <Tabs.List className='CustomTabButton'>
    <Tabs.Trigger  value="Share_Instantly">Share Instantly</Tabs.Trigger>
    <Tabs.Trigger value="Unlimited_Use">Unlimited Use</Tabs.Trigger>
    <Tabs.Trigger value="Capture_Leads">Capture Leads</Tabs.Trigger>
    <Tabs.Trigger value="Grow_Business">Grow Business</Tabs.Trigger>
  </Tabs.List>

  <Box >
    <Tabs.Content value="Share_Instantly" className=' text-left flex justify-content: space-between; '>
    <div  className="elementor-widget-wrap elementor-element-populated">
     <Section
      imageUrl={imageOfTap}
      title="tap nfc"
      alt="tap nfc"
      heading="Tap"
      text="Share contact information instantly with a tap on NFC-compatible smartphones."
    />
     <Section
      imageUrl={imageOfScan}
      title="Scan nfc"
      alt="Scan nfc"
      heading="Scan"
      text="For older phones scan the QR Code."
    />
     <Section
      imageUrl={imageOfShare}
      title="Share nfc"
      alt="Share nfc"
      heading="Share"
      text="Send your profile link to anyone via text message or using any other platform to share your contact profile."
    />
     </div>
     <div>
          <img className='NfcPhoneimage' src={NfcPhone}></img>
    </div>

    </Tabs.Content>

    <Tabs.Content value="Unlimited_Use" className=' text-left flex justify-content: space-between; '>
    <div  className="elementor-widget-wrap elementor-element-populated">
     <Section
      imageUrl={imageOfTap}
      title="tap nfc"
      alt="tap nfc"
      heading="Tap"
      text="Share contact information instantly with a tap on NFC-compatible smartphones."
    />
     <Section
      imageUrl={imageOfScan}
      title="Scan nfc"
      alt="Scan nfc"
      heading="Scan"
      text="For older phones scan the QR Code."
    />
     <Section
      imageUrl={imageOfShare}
      title="Share nfc"
      alt="Share nfc"
      heading="Share"
      text="Send your profile link to anyone via text message or using any other platform to share your contact profile."
    />
     </div>
     <div>
          <img className='NfcPhoneimage' src={NfcPhone}></img>
    </div>

    </Tabs.Content>

    <Tabs.Content className='text-left flex justify-content: space-between; ' value="Capture_Leads">
     <div  className="elementor-widget-wrap elementor-element-populated">
     <Section
      imageUrl={imageOfTap}
      title="tap nfc"
      alt="tap nfc"
      heading="Tap"
      text="Share contact information instantly with a tap on NFC-compatible smartphones."
    />
     <Section
      imageUrl={imageOfScan}
      title="Scan nfc"
      alt="Scan nfc"
      heading="Scan"
      text="For older phones scan the QR Code."
    />
     <Section
      imageUrl={imageOfShare}
      title="Share nfc"
      alt="Share nfc"
      heading="Share"
      text="Send your profile link to anyone via text message or using any other platform to share your contact profile."
      
    />
    
     </div>
     <div>
          <img className='NfcPhoneimage' src={NfcPhone}></img>
    </div>
     
    </Tabs.Content>
    <Tabs.Content value="Grow_Business" className=' text-left flex justify-content: space-between; '>
    <div  className="elementor-widget-wrap elementor-element-populated">
     <Section
      imageUrl={imageOfTap}
      title="tap nfc"
      alt="tap nfc"
      heading="Tap"
      text="Share contact information instantly with a tap on NFC-compatible smartphones."
    />
     <Section
      imageUrl={imageOfScan}
      title="Scan nfc"
      alt="Scan nfc"
      heading="Scan"
      text="For older phones scan the QR Code."
    />
     <Section
      imageUrl={imageOfShare}
      title="Share nfc"
      alt="Share nfc"
      heading="Share"
      text="Send your profile link to anyone via text message or using any other platform to share your contact profile."
    />
     </div>
     <div>
          <img className='NfcPhoneimage' src={NfcPhone}></img>
    </div>

    </Tabs.Content>
  </Box>
</Tabs.Root>
        </div>
        
        </div>
    );
};

export default ComponentOfTab;