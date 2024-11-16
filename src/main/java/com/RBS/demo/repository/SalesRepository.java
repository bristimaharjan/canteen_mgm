package com.RBS.demo.repository;
import com.RBS.demo.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesRepository extends JpaRepository<Sales, Integer> {

    List<Sales> findByPName(String pName);
    List<Sales> findByCategory(String category);
    long countByPId(int pId);

    //long countByCategory(String category);

}
