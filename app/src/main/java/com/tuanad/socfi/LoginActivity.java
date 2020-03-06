package com.tuanad.socfi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONObject;

import java.util.LinkedHashMap;


public class LoginActivity extends AppCompatActivity {
    private EditText edtUsername, edtPassword;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        edtUsername = findViewById(R.id.edtUsername);
        edtPassword = findViewById(R.id.edtPassword);

    }

    public void clickToLogin(View view) {
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        String URL = "http://172.16.1.36:8080/socfi/public/api/login";
        LinkedHashMap<String, String> obj =  new LinkedHashMap<>();
        obj.put("username", edtUsername.getText().toString());
        obj.put("password", edtPassword.getText().toString());
        JSONObject param = new JSONObject(obj);

        JsonObjectRequest objectRequest = new JsonObjectRequest(
                Request.Method.POST,
                URL,
                param,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        System.out.println(response.toString());
                        Log.e("AAAA", response.toString());
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        System.out.println(error.toString());
                        Log.e("error", error.toString());
                    }
                }
        );

        requestQueue.add(objectRequest);
    }

    public void clickToLoginWithFacebook(View view) {
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        String URL = "http://172.16.1.36:8080/socfi/public/api/login/facebook";

        JsonObjectRequest objectRequest = new JsonObjectRequest(
                Request.Method.GET,
                URL,
                null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        System.out.println("===> Normal flow: " + response.toString());
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        System.out.println("===> Error: " + error.toString());
                    }
                }
        );
        requestQueue.add(objectRequest);
    }

    public void clickToLoginWithGoogle(View view) {
        RequestQueue requestQueue = Volley.newRequestQueue(this);
        String URL = "http://172.16.1.36:8080/socfi/public/api/login/google";

        JsonObjectRequest objectRequest = new JsonObjectRequest(
                Request.Method.GET,
                URL,
                null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        System.out.println("===> Normal flow: " + response.toString());
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        System.out.println("===> Error: " + error.toString());
                    }
                }
        );
        requestQueue.add(objectRequest);
    }

    public void clickToSignUp(View view) {
    }

    public void clickToResetPassword(View view) {
    }
}
