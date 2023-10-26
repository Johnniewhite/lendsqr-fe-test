import fetch from 'isomorphic-unfetch';
import { openDB, DBSchema } from 'idb';

interface MyData {
  name: {
    first: string;
    last: string;
  };
  profileImage: string;
  id: string;
  tier: string;
  phoneNumber: string;
  bvn: number;
  gender: string;
  organization: string;
  maritalStatus: string;
  children: string;
  residenceType: string;
  educationLevel: string;
  employmentStatus: string;
  employmentSector: string;
  employmentDuration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  firstGuarantor: {
    fullname: {
      first: string;
      last: string;
    };
    phoneNumber: string;
    email: string;
    relationship: string;
  };
  secondGuarantor: {
    fullname: {
      first: string;
      last: string;
    };
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

interface MyDB extends DBSchema {
  data: {
    key: string;
    value: MyData;
  };
}

async function fetchAndStoreData() {
  const response = await fetch('https://run.mocky.io/v3/0355ca2a-19fa-4987-9592-bcc4d9366a22');
  const data = await response.json();

  const db = await openDB<MyDB>('my-database', 1, {
    upgrade(db) {
      const store = db.createObjectStore('data', {
        keyPath: 'id'
      });
      data.result.forEach((item: MyData) => {
        store.put(item);
      });
    }
  });
}

export default fetchAndStoreData;
