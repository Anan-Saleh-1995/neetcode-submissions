class Solution {
    public boolean isSubsequence(String s, String t) {
        /*
            sub subsequence
            frequency related
            count s strings or ask, like our mistake from before
            ask if s is only a-z or is it A-Z and a-z then its 128
            can it be toLowerString() if its A-Z so array remains 26 size

            the constraints in neetcode are

            s.length is maximum 100 and minimum 0
            t length can be up to 10k
            s and t consist only of lower case english letters

            also its not just any counter also the placement of the s in the t
            n followed by o followed by d followed e
            is exactly how its shown up in
            neetcode
            n then o then d then e

            my first algorithmec thoughts

            first we see that the exact same words do appear
            otherwise we throw a false
            second we check
            is n o d e
            are sequencaited in the same order
            n****ode
            thats new thats what i need to know how to do

            my second algoirtmec thoughts are
            wait..this is valid anagram?
            then i looked and checked and valid anagram is like this
            Input: s = "racecar", t = "carrace"
            each letter appear exact same numbers in second letter does not matter the order

            so sequence is an important subject
            for example middlewares
            are executed in a sequence each part is important part and it has a follow up
            
            so i need to memorize
            first comes n
            second comes o
            third comes d
            fourth comes e
            and you sir are a map ( reference to arthurt morgan "you sir are a fish" )

            should i start thinking about the count of n
            first comes n, how many ns?
            it does not mattaaaaaaah
            because first comes n second comes n thid comes n fourth comes n
            it does not mattahh (reference to tom hardy english accent)
            
            okay mate?

            now how do we go about second letter?

            is first equal the first of first letter?
            now what about second?
            maybe second not, maybe second will come like in "neetcode"

            is first n equal to the first n ? yes
            what about the o? its second place
            but the second place of s is e, does it make it wrong? nada

            so what do we do? what do we do???????? mind is blown here
            cannot comprehend what is happening

            how do i do it? 

            so we record sequences 

            lets think about alphabeta placement
            its lower caases so its always from 1 to 26

            maybe who cares about places? maybe?

            sequence start from n
            so far so good
            now its o
            we keep going
            e e t
            then its o
            so far so good
            then its d
            so far its so good
            then e so far its so good


            lets try

            axc

            first its a its good
            second is x
            we look and look and look and look and look and look we reach end no x
            false

            what is a tricky example?

            happy
            loalwhiqancpqwiejpasdy

            we point at h
            then we start pointing at l
            how do we remember?

            my mind is blownnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
            arrrrrrrrrrrrrrrrrrrrgggggggggggggggggggggghhhhhhhhhhhhhhhhhh
            howwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww do i do itttttttttttttt


            what is happening

            okay

            h is in line
            good
            so we must find h to say move to a
            we find h, good
            now its a
            if we don't find a and it ends thats it

            its not even a subsequence
            so lets brute force it first the regular O(N^2)

            what is the stop command?
            how do we exit the loop, so its always a while

            first its a for
            then its a while
            in the while
            
            lets say

            happy
            loalwhiqncpqwiejpasdy
            this is wrong
            we are in a, we find it
            then string ends

            yes im confident in this

            we exit while, we move pointer of happy to the next now we must find it
            if we do we move
            if we reach end of loop of the while thats when we stop

            okay this is enough tlaking lets write code


            found the issue p will be visited multiple times the first one

            after i wrote the while i figured it out

            memorize? we found it at what place?
            happy
            loalwhiqancpqwiejpasdy
            h we found it? yes. where? at 0
            a we found it? yes. where? tricky part here
            we found it at 2 but does it follow the h? no it doesnt
            so what we do? i get it............
            indexes are always bigger
            0 is h
            first a is below 0
            so no.
            problmatic because its not so simple alot of computation

            what tools are at my disposal?
            map, set, stack....

            no we found h at 5 not at 0 like i said up there
            the a we found is less than 5 so its no good
            placement is bad we need a after 5

            h we found it? yes. where? at 5.
            a we found it? yes. whre? at 3, 3 is lower than 5 yes continue
            a we found it? yes where? at 8, 8 is lower than 5? no great job, move to next letter

            so map memorize
            h at 5
            map tools in javascript

            mapVar.put(key, value);
            mapVar.get(key);
            mapVar.size();
            mapVar.containsKey();

            i think these are enough

        */

        Map<Character, Integer> memorizer = new HashMap<Character, Integer>();
        for (int i = 0; i < s.length(); i++) { /* 'happy' */
            char cs = s.charAt(i);
            int j = 0;
            while(j < t.length()) { /* found the issue p will be visited multiple times the first one */
                char ct = t.charAt(j);
                if (Character.compare(cs, ct) == 0) {
                    if (memorizer.size() == 0) {
                        memorizer.put(cs, j);
                        break;
                    } else {
                        if (memorizer.containsKey(ct) == false) {
                            memorizer.put(cs, j);
                            break;
                        } else {
                            int foundAt = j;
                            int previousFound = memorizer.get(ct);
                            if (previousFound > foundAt) {
                                memorizer.put(cs, j);
                                break;
                            }
                        }
                    }
                }
                j++;
            }
            if (j == t.length()) {
                return false;
            }
        }
        return true;
    }
}