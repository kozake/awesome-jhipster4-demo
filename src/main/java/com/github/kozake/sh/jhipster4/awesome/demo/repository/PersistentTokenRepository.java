package com.github.kozake.sh.jhipster4.awesome.demo.repository;

import com.github.kozake.sh.jhipster4.awesome.demo.domain.PersistentToken;
import com.github.kozake.sh.jhipster4.awesome.demo.domain.User;
import java.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Spring Data JPA repository for the PersistentToken entity.
 */
public interface PersistentTokenRepository extends JpaRepository<PersistentToken, String> {

    List<PersistentToken> findByUser(User user);

    List<PersistentToken> findByTokenDateBefore(LocalDate localDate);

}
