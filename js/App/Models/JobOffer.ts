class JobOffer {
  position: String;
  level: String;
  location: String;
  salaryMin: String;
  salaryMax: String;
  currency: String;
  company: String;
  desc: String;
  link: String;

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
