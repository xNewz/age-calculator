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

            int day = date_now.Day - date_input.Day;
            int month = 12 + date_now.Month - date_input.Month;
            int year = (date_now.Year + 543) - date_input.Year - 1;

            Console.WriteLine("อายุของคุณ " + year + " ปี " + month + " เดือน " + day + " วัน ");
            Console.WriteLine("ปีนักษัตร : " + zodiac(date_input.Year));
        }
    }
}
