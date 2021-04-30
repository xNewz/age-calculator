using System;

namespace test_code
{
    class Program
    {
        static string zodiac(int year)
        {
            string[] year_zodiac = { 
                "ปีมะเส็ง,ปีงูเล็ก", "ปีมะเมีย,ปีม้า", "ปีมะแม,ปีแพะ", "ปีวอก,ปีลิง", "ปีระกา,ปีไก่", "ปีจอ,ปีหมา",
                "ปีกุน,ปีหมู", "ปีชวด,ปีหนู", "ปีฉลู,ปีวัว", "ปีขาล,ปีเสือ", "ปีเถาะ,ปีกระต่าย", "ปีมะโรง,ปีงูใหญ่"
            };
            return year_zodiac[year % 12];
        }
        
        static void Main(string[] args)
        {
            DateTime date_now = DateTime.Now;
            Console.WriteLine("กรอกวันเกิด เช่น 01/02/2544");
            DateTime date_input = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy", null);
            
            int day, month, year;

            int DaysInBdayMonth = DateTime.DaysInMonth(date_input.Year, date_input.Month);
            int DaysRemain = date_now.Day + (DaysInBdayMonth - date_input.Day);
            
            if (date_now.Month > date_input.Month)
            {
                year = (date_now.Year + 543) - date_input.Year;
                month = date_now.Month - (date_input.Month + 1) + Math.Abs(DaysRemain / DaysInBdayMonth);
                day = (DaysRemain % DaysInBdayMonth + DaysInBdayMonth) % DaysInBdayMonth;
            }
            else if (date_now.Month == date_input.Month)
            {
                if (date_now.Day >= date_input.Day)
                {
                    year = (date_now.Year + 543) - date_input.Year;
                    month = 0;
                    day = date_now.Day - date_input.Day;
                }
                else
                {
                    year = ((date_now.Year + 543) - 1) - date_input.Year;
                    month = 11;
                    day = DateTime.DaysInMonth(date_input.Year, date_input.Month) - (date_input.Day - date_now.Day);
                }
            }
            else
            {
                year = ((date_now.Year + 543) - 1) - date_input.Year;
                month = date_now.Month + (11 - date_input.Month) + Math.Abs(DaysRemain / DaysInBdayMonth);
                day = (DaysRemain % DaysInBdayMonth + DaysInBdayMonth) % DaysInBdayMonth;
            }
            
            Console.WriteLine("อายุของคุณ " + year + " ปี " + month + " เดือน " + day + " วัน ");
            Console.WriteLine("ปีนักษัตร : " + zodiac(date_input.Year));
        }
    }
}
