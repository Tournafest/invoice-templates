import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import PdfTemplate1 from "./components/PdfTemplate1";
import React from 'react';

function App() {
  const addressData = {
    "sender": "Given By",
    "name": "Dexter",
    "address": {
      "line1": "138,",
      "line2": "Sanjaynagar, bangalore-94,",
      "line3": "Sanjaynagar"
    },
    "email": "dexter65@email.com",
    "phone": "7456564334",
    "date": "20/12/20, 06:23AM"
  }
  const addressData2 = {
    "sender": "Billed To",
    "name": "Trangy",
    "addressheading":"Billing Address",
    "address": {
      "line1": "138,",
      "line2": "Sanjaynagar, bangalore-94,",
      "line3": "Sanjaynagar"
    },
    "email": "dexter65@email.com",
    "phone": "7456564334",
    "date": ""
  }
  const items = [
    {
      "title": "Subscriptiom purchase",
      "description": "subscription name",
      "amount": "Rs.400"
    },
    {
      "title": "Subscriptiom purchase",
      "description": "subscription name",
      "amount": "Rs.400"
    }
  ]
  const extra = [
    {
      "title": "Subscriptiom purchase",
      "amount": "Rs.400"
    },
    {
      "title": "Subscriptiom purchase",
      "amount": "Rs.400"
    }
  ]

  const total = "Rs.400"

  const handleclick = async () => {
    const blob = await pdf((
      <PdfTemplate1 addressData={addressData} addressData2={addressData2} items={items} extra={extra} total={total} />
    )).toBlob();

    saveAs(blob, `test_results`);
  };

  return (
    <div className="">
      <button onClick={handleclick}>Download Pdf</button>
    </div>
  );
}

export default App;
