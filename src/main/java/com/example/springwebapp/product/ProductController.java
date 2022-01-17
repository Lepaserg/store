package com.example.springwebapp.product;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * Created by Denis on 2/20/2016.
 */

@Controller
public class ProductController {

    @RequestMapping("/")
    public String homeWithSession(Model model, HttpSession session) {
        String sid = session.getId();
        model.addAttribute("sid", sid);
        return "index";
    }

}
