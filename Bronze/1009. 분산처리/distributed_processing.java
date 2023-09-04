package Bronze;

import java.io.*;
import java.util.StringTokenizer;

public class distributed_processing {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int num=Integer.parseInt(br.readLine());
        int count = 0;
        int[] result;
        result = new int[num];

        while(count<num){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a, b;
            a = Integer.parseInt(st.nextToken());
            b = Integer.parseInt(st.nextToken());

            int value = 1;

            for(int i=0;i<b;i++){
                value=(value*a)%10;
            }
            if(value==0){value=10;}
            result[count]=value;
            ++count;
        }

        for(int i=0;i<num;i++){
            System.out.println(result[i]);
        }
    }
}
