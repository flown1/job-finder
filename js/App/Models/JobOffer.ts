class JobOffer {
  position: string;
  level: string;
  location: string;
  salaryMin: string;
  salaryMax: string;
  currency: string;
  company: string;
  desc: string;
  link: string;

  constructor(position, level, location, salaryMin, salaryMax, company, desc, link){
    this.position = position;
    this.level = level;
    this.location = location;
    this.salaryMin = salaryMin;
    this.salaryMax = salaryMax;
    this.company = company;
    this.desc = desc;
    this.link = link;
  }
}
